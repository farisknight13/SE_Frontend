import { Component, OnInit, ViewChild,ElementRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ListResponse, Product } from 'src/app/models/product.model';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { NetworkService } from 'src/app/services/network.service';
import html2canvas from 'html2canvas'
import { jsPDF } from 'jspdf'
import { from } from 'rxjs';
interface Subject {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-se',
  templateUrl: './se.component.html',
  styleUrls: ['./se.component.css']
})
export class SEComponent implements OnInit {

  displayedColumns = ['image', 'name', 'subject', 'no']

  dataSource = new MatTableDataSource<ListResponse>();

  // ตั้งค่าชื่อตัวแปรแทนตัวอักษรตอน search
  textSearch: string;
  selectedValue: string;

  subjects: Subject[] = [
    {value: 'se', viewValue: 'Software Engineer'},
    {value: 'im', viewValue: 'Imfomation Management'},
    {value: 'ml', viewValue: 'Machine Learning'},
    {value: 'py', viewValue: 'Python for Predictive'}
  ];

  //ทำให้มัน sort เจอค่ามากสุด
  @ViewChild(MatSort, { static: true }) sort: MatSort
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator
  @ViewChild('table', {static: false}) htmlData:ElementRef;
  
  constructor(private networkService: NetworkService) { }
  
  ngOnInit(): void {
    this.dataSource.sort = this.sort
    this.dataSource.paginator = this.paginator

    this.feedData();
  }
  downloadPDF() {
    var element = document.getElementById('table')
    html2canvas(element).then((canvas) => {
      console.log(canvas)
      console.log(canvas.style.height)
      let height = parseInt(canvas.style.height)
      console.log(height)
      var imgData = canvas.toDataURL('image/png')
      var doc = new jsPDF('p','px',[canvas.height, canvas.width])
      var imgHeight = canvas.height * 208 / canvas.width;
      doc.addImage(imgData,0,0,canvas.width,canvas.height)
      doc.save("image.pdf")
    })
  }

  feedData() {
    //async
    //subscibe (obsever)
    this.networkService.getListNames().subscribe(
      data => {
        this.dataSource.data = data
        console.log()
      },
      error => {
        alert(JSON.stringify(error))
      },
      () => {
        console.log("feed neywork done")
      }
    )
  }
  

//  เช็คปุ่ม search สร้างตัวแปลแล้วดักค่า
  search(event: Event) {
    let fliterValue = '';
    if (event) {
      fliterValue = (event.target as HTMLInputElement).value;
    }
    this.dataSource.filter = fliterValue.trim().toLowerCase();
  }

  clearSearch() {
    this.textSearch = '';
    this.search(null)
  }
}
