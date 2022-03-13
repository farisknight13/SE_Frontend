import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from 'src/app/models/product.model';
import { NetworkService } from 'src/app/services/network.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

interface Subject {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-stock-create',
  templateUrl: './stock-create.component.html',
  styleUrls: ['./stock-create.component.css']
})
export class StockCreateComponent implements OnInit {

  imagePreview: string | ArrayBuffer;
  file: File;

  selectedValue: string;

  subjects: Subject[] = [
    { value: 'se', viewValue: 'Software Engineer' },
    { value: 'im', viewValue: 'Imfomation Management' },
    { value: 'ml', viewValue: 'Machine Learning' },
    { value: 'py', viewValue: 'Python for Predictive' }
  ];

  constructor(private networkService: NetworkService, private router: Router, public dialog: MatDialog) { }

  openDialog() {

    const dialogRef = this.dialog.open(StockCreateDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialog1() {

    const dialogRef = this.dialog.open(StockCreateDialogComponent1);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit(): void {
  }
  // เอาตัวรูปมาแสดงผลในปุ่ม select image
  onPreviewImage(event) {
    const metaImage = event.target.files[0];
    if (metaImage) {
      this.file = metaImage;
      console.log(this.file);

      const reader = new FileReader();
      reader.readAsDataURL(metaImage)
      reader.onload = () => {
        this.imagePreview = reader.result;
      }
    }
  }
  // ทำฟอร์มเวลากรอก create ให้เก็บช้อมูลแล้วเจ้งเตือน
  onSubmit(productForm: NgForm) {

    if (productForm.invalid) {
      return;
    }
    const values = productForm.value;
    let product = new Product();
    product.name = values.name;
    product.subject = values.subject;
    product.id = values.studentid;
    product.photo = this.file;
    //let eer = "mesage: Can not insert data"
    //alert(JSON.stringify(eer))
    if (product.id != null) {
      if (product.name != null) {
        if (product.subject != null) {
          if (product.photo != null) {
            console.log(product.photo)
            this.networkService.postCheckName(product).subscribe(
              data => {
                alert("Check Name is Complete")
                console.log(product)
                this.openDialog()

              },
              error => {
                console.log(error.error.message)
                this.openDialog()
              }
            )
          }
        }
      }
    } else {
      alert("data is null")
      this.openDialog1()
    }



  }

  // const values = productForm.value;
  // let product = new Product();
  // product.name = values.name;
  // product.price = values.price;
  // product.stock = values.stock;
  // product.image = this.file;

  // console.log(product);
}

@Component({
  selector: 'stock-create-dialog',
  templateUrl: 'stock-create-dialog.html',
})
export class StockCreateDialogComponent { }

@Component({
  selector: 'stock-create-dialog1',
  templateUrl: 'stock-create-dialog1.html',
})
export class StockCreateDialogComponent1 { }


