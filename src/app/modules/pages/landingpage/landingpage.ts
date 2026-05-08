import { Component } from '@angular/core';
import { Navbar } from '../../component/shared/navbar/navbar';
import { Hero } from '../../component/hero/hero';
import { Services } from '../../component/services/services';
import { Contact } from '../../component/contact/contact';
import { Footer } from '../../component/shared/footer/footer';
import { History } from '../../component/history/history';

@Component({
  selector: 'app-landingpage',
  imports: [Navbar, Hero, Services, Contact, Footer, History],
  templateUrl: './landingpage.html',
  styleUrl: './landingpage.css',
})
export class Landingpage {}
