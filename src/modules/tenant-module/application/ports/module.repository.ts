import { Module } from '../../domain/entities/module.entity';

export abstract class IModuleRepository {
  abstract findByCode(code: string): Promise<Module | null>;
  abstract findById(id: string): Promise<Module | null>;
  abstract findAll(): Promise<Module[]>;
} 