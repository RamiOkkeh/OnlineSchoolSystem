from django.db import models
from django.contrib.auth.models import (
    AbstractBaseUser,
    PermissionsMixin,
    BaseUserManager,
)


class UserAccountManager(BaseUserManager):
    def create_user(self, email, name, role, img='null', password=None ):
        if not email:
            raise ValueError("Users must have an email address")

        email = self.normalize_email(email)
        user = self.model(email=email, name=name, role=role, img='null')
        user.set_password(password)
        user.save()

        return user

    def create_superuser(self, email, name, role, password, img='null'):
        user = self.create_user(email, name, role, password, img='null')
        user.is_superuser = True
        user.is_staff = True
        user.save()

        return user


class UserAccount(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(max_length=255, unique=True)
    name = models.CharField(max_length=255)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    
    TEACHER = 'Teacher'
    STUDENT = 'Student'
    PRINCIPAL = 'Principal'
    PARENT = 'Parent'
    USER = 'User'
    ADMIN = 'Admin'
    ROLE_CHOICES = [
        (TEACHER, 'Teacher'),
        (STUDENT, 'Student'),
        (PRINCIPAL, 'Principal'),
        (PARENT, 'Parent'),
        (USER, 'User'),
        (ADMIN, 'Admin'),
    ]
    
    role = models.CharField(max_length=255, default=USER , choices=ROLE_CHOICES)
    img = models.CharField(max_length=690 ,null=True, default='null')

    objects = UserAccountManager()

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["name","role","img"]

    def __str__(self):
        return self.email