import { Component } from '@angular/core';
import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";

@Component({
  selector: 'app-application',
  imports: [Header, Footer],
  templateUrl: './application.html',
  styleUrl: './application.css',
})
export class Application {

}
