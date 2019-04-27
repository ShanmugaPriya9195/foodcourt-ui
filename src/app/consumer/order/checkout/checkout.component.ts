import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AppService } from '../../../app.service';
import { Order } from '../../../schemas/Order';
import * as $ from 'jquery';

@Component({
    selector: 'checkout-root',
    templateUrl: './checkout.component.html',
    styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
    title = 'Home';
    order: any = [];

    constructor(private _ordersService: AppService, private route: ActivatedRoute, private router: Router) {
        this.order = new Order();
    }

    ngOnInit() {

    }

    validateFields() {
        let fullname = $('#fullname').val();
        let mobile = $('#mobile').val();
        let email = $('#email').val();
        let address = $('#address').val();
        let city = $('#city').val();
        let paytmNumber = $('#paytmNumber').val();

        if (fullname == '' || mobile == '' || email == '' || address == '' || city == '' || paytmNumber == '') {
            alert('All fields are mandatory!');
            return;
        } else {
            this.order.id = Number(1100100);
            this.order.name = fullname;
            this.order.mobile = mobile;
            this.order.email = email;
            this.order.locality = address;
            this.order.city = city;

            this._ordersService.updateOrder(this.order).subscribe(
                (data: any) => {
                    this.router.navigate(['consumer/order-success']);
                },
                err => console.log(err)
            );
        }
    }

}
