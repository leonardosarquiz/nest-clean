/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
import { Controller, Post, UseGuards } from '@nestjs/common'




@Controller('/questions')
@UseGuards()
export class CreateQuestionController {
  constructor() { }

  @Post()
  async handle() {
    return 'ok'
  }
}
