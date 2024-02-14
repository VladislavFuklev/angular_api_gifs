import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GiphService } from 'src/app/services/giph.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  service = inject(GiphService);
  form: FormGroup;
  fb = inject(FormBuilder);

  ngOnInit(): void {
    this.service.getGiph();
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      query:['', [Validators.required]]
    });
  }

  search() {
      this.service.searchGiph(this.form.value.query)
  }
}
