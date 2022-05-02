import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface DataItem {
  fechaInicial: string;
  fechaFinal: string;
  valor:number;
} 

@Component({
  selector: 'app-modal-factor',
  templateUrl: './modal-factor.component.html',
  styleUrls: ['./modal-factor.component.css']
})
export class ModalFactorComponent implements OnInit {
  isVisible = false;
  validateForm !: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.CleanForm();
  }
  
  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

  CleanForm(){
    this.validateForm  = this.fb.group({
      nombre: [null, [Validators.required]],
      descripcion: [null, [Validators.required]],
    });
  }

  listOfColumn = [
    {
      title: 'Fecha Inicial',
      compare: null,
      priority: false
    },
    {
      title: 'Centro de Final',
      compare: null,
      priority: false
    },
    {
      title: 'Valor',
      compare: (a: DataItem, b: DataItem) => a.valor - b.valor,
      priority: 2
    },
    
  ];
  listOfData: DataItem[] = [
    {
     fechaInicial: '23 marzo',
     fechaFinal: '23 mayo',
     valor: 1345
    },
  ];
  
}