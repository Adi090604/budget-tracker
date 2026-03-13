import { Controller, Post, Body, Get, Param, Patch, UseInterceptors, UploadedFile } from '@nestjs/common';
import { UsersService } from './users.service';
import { FileInterceptor } from '@nestjs/platform-express'; // Added
import { diskStorage } from 'multer'; // Added
import { extname } from 'path'; // Added

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post('register')
  register(@Body() body: any) {
    return this.usersService.register(body);
  }

  @Post('login')
  login(@Body() body: any) {
    return this.usersService.login(body);
  }

  @Get(':id')
  getUser(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  @UseInterceptors(FileInterceptor('avatar', {
    storage: diskStorage({
      destination: './uploads',
      filename: (req, file, cb) => {
        // Generates a filename like: 171023456789.png
        const name = Date.now() + extname(file.originalname);
        cb(null, name);
      },
    }),
  }))
  async updateUser(
    @Param('id') id: string, 
    @Body() body: any, 
    @UploadedFile() file: Express.Multer.File
  ) {
    const updateData = { ...body };
    if (file) {
      updateData.avatar = file.filename; 
    }
    return this.usersService.update(+id, updateData);
  }
}