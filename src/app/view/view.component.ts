import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Product} from './product.model';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.less']
})
export class ViewComponent implements OnInit {
len: number=0;
product: Product[]=[];
//product: Product[]=[{"id":100,"pname":"Mobile","batchno":"CLK98123","price":9000.0,"noofproduct":6},{"id":101,"pname":"Smart TV","batchno":"LGST09167","price":60000.0,"noofproduct":3},{"id":102,"pname":"Washing Machine","batchno":"38753BK9","price":9000.0,"noofproduct":7},{"id":103,"pname":"Laptop","batchno":"LHP29OCP","price":24000.0,"noofproduct":1},{"id":104,"pname":"Air Conditioner","batchno":"ACLG66721","price":30000.0,"noofproduct":5},{"id":105,"pname":"Refrigerator ","batchno":"12WP9087","price":10000.0,"noofproduct":4}];
  constructor(private http: HttpClient) { }

  ngOnInit(){ this.http.get<Product[]>('http://arjrestfulspring.herokuapp.com/product')
.subscribe((response) =>this.getdata(response))
  }

getdata(response: any){
this.product=response;
this.len=this.product.length;
}
}
