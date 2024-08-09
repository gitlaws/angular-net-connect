import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-fieldset',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './fieldset.component.html',
  styleUrls: ['./fieldset.component.scss'],
})
export class FieldsetComponent implements OnInit {
  @Input() legend = 'Fieldset';
  @Input() formControls: {
    name: string;
    type: string;
    label: string;
    validators?: any[];
  }[] = [
    {
      name: 'firstName',
      label: 'First Name',
      type: 'text',
      validators: [Validators.required],
    },
    {
      name: 'lastName',
      label: 'Last Name',
      type: 'text',
      validators: [Validators.required],
    },
    {
      name: 'email',
      label: 'Email',
      type: 'email',
      validators: [Validators.required, Validators.email],
    },
  ];

  formGroup: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.group({});
  }

  ngOnInit(): void {
    this.formControls.forEach((control) => {
      this.formGroup.addControl(
        control.name,
        new FormControl('', control.validators || [])
      );
    });
  }

  onSubmit() {
    if (this.formGroup.valid) {
      console.log('Form Submitted', this.formGroup.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
