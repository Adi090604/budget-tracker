import { Controller, Get, Post, Delete, Param, Body, UploadedFile, UseInterceptors } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@Controller('transactions')
export class TransactionsController {

  constructor(private transactionsService: TransactionsService) {}

  @Post()
  @UseInterceptors(FileInterceptor('receipt', {
    storage: diskStorage({
      destination: './uploads',
      filename: (req, file, cb) => {
        const filename = Date.now() + '-' + file.originalname;
        cb(null, filename);
      }
    })
  }))
  create(
    @UploadedFile() file: Express.Multer.File,
    @Body() body: any
  ) {

    if(file){
      body.receipt = file.filename;
    }

    return this.transactionsService.create(body);
  }

  // GET transactions for specific user
  @Get('user/:user_id')
  findAll(@Param('user_id') user_id: number) {
    return this.transactionsService.findAll(user_id);
  }

  // DELETE transaction
  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.transactionsService.delete(id);
  }

}