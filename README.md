# Project Installation with Docker

This README provides instructions on how to set up and run the project using Docker and a Makefile.

## Prerequisites

- Ensure you have [Docker](https://docs.docker.com/get-docker/) and [Docker Compose](https://docs.docker.com/compose/install/) installed on your machine.
- Make sure you have `make` installed. It's usually available by default on Linux and macOS systems.

## Project Structure

The project uses Docker Compose to manage multiple services, including a MySQL database, backend, and frontend applications. The provided Makefile allows for easy management of these services.

## Makefile Commands

### Starting Services

1. **Start MySQL Database**
   ```bash
   make dbup
2. **Then you have to create database and table m_karyawan with this command**
    ```bash
    make migrateup
3. **After that make sure you create container for backend**
    ```bash
    make beup
4. **And also container for frontend**
    ```bash
    make feup
5. **Done, you can now access the address for backend and frontend**
    ```bash
    backend: http://localhost:3000/api/
    frontend: http://localhost:3001/
6. **if you want to shutdown all the container and also the database**
    ```bash
    make down
### Backend Api List

1. **Just landing**
    ```bash
    http://localhost:3000/api/
2. **Get All Karyawan (GET)**
    ```bash
    http://localhost:3000/api/karyawan
3. **Get Karyawan by NIK (GET)**
    ```bash
    http://localhost:3000/api/karyawan/:nik
4. **Add New Karyawan (POST)**
    ```bash
    http://localhost:3000/api/karyawan

    json body:
    {
        "nama": "deni fahrony",
        "alamat": "jakarta",
        "tanggal_lahir": "2000-11-01 00:00:00",
        "divisi": "IT",
        "status": "Tetap"
    }
5. **Update Karyawan by NIK (PUT)**
    ```bash
    http://localhost:3000/api/karyawan/:nik

    json body:
    {
        "nama": "deni fahrony",
        "alamat": "jakarta",
        "tanggal_lahir": "1990-01-01 00:00:00",
        "status": "Tetap"
    }
6. **Delete Karyawan by NIK (DELETE)**
    ```bash
    http://localhost:3000/api/karyawan/:nik