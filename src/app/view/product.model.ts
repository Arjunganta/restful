export class Product   
{  
public  id: number;  
public  pname: string;  
public  batchno: string;  
public  price: number;  
public  noofproduct: number;  
    
  
constructor(id: number, pname: string,batchno: string,price: number,noofproduct: number)   
{  
  
this.id = id;  
this.pname = pname;  
this.batchno = batchno;  
this.price = price;  
this.noofproduct = noofproduct;  
} 
}
