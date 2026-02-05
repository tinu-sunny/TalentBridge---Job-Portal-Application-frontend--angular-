import { Component } from '@angular/core';
import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import { Auth } from "../../components/auth/auth";

@Component({
  selector: 'app-landing-page',
  imports: [Header, Footer, Auth],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css',
})
export class LandingPage {

}
