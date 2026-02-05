import { Component } from '@angular/core';
import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";

@Component({
  selector: 'app-jobview',
  imports: [Header, Footer],
  templateUrl: './jobview.html',
  styleUrl: './jobview.css',
})
export class Jobview {

}
