import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-insert-cmp',
  templateUrl: './insert-cmp.component.html',
  styleUrls: ['./insert-cmp.component.css']
})
export class InsertCmpComponent implements OnInit {

  public product_title: any = '';
  public product_price: any = '';
  public validData: boolean = this.product_title.length == 0 || this.product_price.length == 0 ? true : false;
  public lastProductAdded: any = false;
  public isCollapsed = false;
  public title = this.isCollapsed ? 'Form' : 'Code';
  public data = `\nrouter.post('/products',function (req, res){
    var p = new product();
      p.title = req.body.title;
      p.price = req.body.price;
      p.save(function (err,result) {
          if (err) {
              res.send(err);
          }
          res.send({ message: 'Product Created !', product: result })
      })
  });`

  constructor(private http: HttpClient) { }

  ngOnInit() {
    
  }

  insertProduct = () => {
    if (this.product_title.length == 0 || this.product_price.length == 0) {
      alert('Invalid entry')
      return
    }
    this.http.put('http://localhost:3000/users/products', {
      title: this.product_title,
      price: this.product_price
    }).subscribe(results => {
      this.lastProductAdded = results
    })
      ;
  }
}
