import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async register(data: any) {
    const user = this.userRepository.create({
      name: data.name,
      email: data.email,
      password: data.password,
    });
    return this.userRepository.save(user);
  }

  async login(data: any) {
    const user = await this.userRepository.findOne({
      where: { email: data.email }
    });

    if (!user) {
      return { message: "User not found" };
    }

    if (user.password !== data.password) {
      return { message: "Invalid password" };
    }

    return {
      message: "Login successful",
      user
    };
  }

  // --- FETCH USER DATA ---
  async findOne(id: number) {
    const user = await this.userRepository.findOne({ where: { id } });
    
    if (!user) {
      throw new NotFoundException('User not found');
    }

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      avatar: user.avatar // <--- ADD THIS LINE!
    };
  }

  // --- UPDATE USER DATA (Fixed Placement) ---
  async update(id: number, data: { name?: string; password?: string; avatar?: string }) {
  const user = await this.userRepository.findOne({ where: { id } });
  
  if (!user) throw new NotFoundException('User not found');

  if (data.name) user.name = data.name;
  if (data.password) user.password = data.password;
  if (data.avatar) user.avatar = data.avatar; // Save the filename to the DB

  return this.userRepository.save(user);
}
}