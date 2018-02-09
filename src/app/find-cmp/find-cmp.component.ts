import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';


@Component({
  selector: 'app-find-cmp',
  templateUrl: './find-cmp.component.html',
  styleUrls: ['./find-cmp.component.css']
})


export class FindCmpComponent implements OnInit {
  @Input() name: String;
  @Output() userUpdated = new EventEmitter();

  public model: any;

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
  
  constructor() {
    this.userUpdated.emit(123);
   }

  ngOnInit() {
  }

}
