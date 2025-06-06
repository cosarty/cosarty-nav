
import { Component, EventEmitter, Output } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { $t } from 'src/locale'
import { FormBuilder, FormGroup } from '@angular/forms'
import { NzDrawerModule } from 'ng-zorro-antd/drawer'
import { NzFormModule } from 'ng-zorro-antd/form'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzInputModule } from 'ng-zorro-antd/input'
import { UploadComponent } from 'src/components/upload/index.component'
import { NzColorPickerModule } from 'ng-zorro-antd/color-picker'
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker'
import dayjs from 'dayjs'

@Component({
  standalone: true,
  imports: [
    NzDatePickerModule,
    FormsModule,
    ReactiveFormsModule,
    NzDrawerModule,
    NzFormModule,
    NzButtonModule,
    NzInputModule,
    UploadComponent,
    NzColorPickerModule,
  ],
  selector: 'countdown-drawer',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class CountdownDrawerComponent {
  @Output() ok = new EventEmitter<void>()

  $t = $t
  visible = false
  validateForm!: FormGroup
  index = 0

  constructor(private fb: FormBuilder) {
    this.validateForm = this.fb.group({
      topColor: [''],
      bgColor: [''],
      title: [''],
      url: [''],
      dateColor: [''],
      dayColor: [''],
      date: [null],
    })
  }

  open(data: any, idx: number) {
    this.index = idx
    for (const k in data) {
      this.validateForm.get(k)!?.setValue(data[k])
    }
    this.visible = true
  }

  onUploadImage(data: any) {
    this.validateForm.get('url')!.setValue(data.cdn)
  }

  handleClose() {
    this.visible = false
  }

  handleSubmit() {
    const values = this.validateForm.value
    this.ok.emit({
      ...values,
      date: dayjs(values.date).format('YYYY-MM-DD'),
      index: this.index,
    })
    this.handleClose()
  }
}
