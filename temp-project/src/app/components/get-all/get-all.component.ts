import { Component, OnInit } from '@angular/core';
import { Celular } from '../../models/models/celular.model'; 
import { CelularService } from '../../services/celular.service'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-get-all',
  templateUrl: './get-all.component.html',
  styleUrls: ['./get-all.component.css'],
  imports: [CommonModule]
})
export class GetAllComponent implements OnInit {
  celulares: Celular[] = [];

  constructor(private : CelularService) {}

  ngOnInit(): void {
    this.getAllCelulares();
  }

  getAllCelulares(): void {
    this.celularService.getAll().subscribe((data: Celular[]) => {
      this.celulares = data;
    }, error => {
      console.log('Error al obtener los celulares:', error);
    });
  }
}
