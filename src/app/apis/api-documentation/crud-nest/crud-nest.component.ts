import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonService } from './common.service';

@Component({
  selector: 'app-crud-nest',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './crud-nest.component.html',
  styleUrls: ['./crud-nest.component.scss'],
})
export class CrudNestComponent implements OnInit {
  userForm: FormGroup;
  users: any[] = [];
  isEditMode = false;
  currentUserId: number | null = null;

  constructor(private fb: FormBuilder, private commonService: CommonService) {
    this.userForm = this.fb.group({
      Name: ['', Validators.required],
      Mobile: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      Age: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.commonService.GetAllUsers().subscribe((data: any) => {
      this.users = data;
    });
  }

  SubmitForm(): void {
    if (this.userForm.valid) {
      const type =
        this.isEditMode && this.currentUserId !== null ? 'Update' : 'Add';
      const userData = { ...this.userForm.value, id: this.currentUserId };
      this.commonService.AddUpdateUser(userData, type).subscribe((data) => {
        alert(type === 'Add' ? 'Added' : 'Updated');
        this.userForm.reset();
        this.loadUsers();
        this.resetForm();
        console.log(data);
      });
    }
  }

  GetUserByID(id: number): void {
    this.commonService.GetUserByID(id).subscribe((user: any) => {
      this.userForm.patchValue(user);
      this.isEditMode = true;
      this.currentUserId = id;
      $('#home').addClass('show active');
      $('#profile').removeClass('show active');
    });
  }

  DeleteUserByID(id: number): void {
    this.commonService.DeleteUserByID(id).subscribe(() => {
      alert('User Deleted');
      this.loadUsers();
    });
  }

  resetForm(): void {
    this.userForm.reset();
    this.isEditMode = false;
    this.currentUserId = null;
  }
}
