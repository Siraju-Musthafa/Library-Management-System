from django.db import models
from django.contrib.auth.models import User
from books.models import Book


class Borrow(models.Model):

    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE
    )

    book = models.ForeignKey(
        Book,
        on_delete=models.CASCADE
    )

    borrow_date = models.DateField(auto_now_add=True)

    return_date = models.DateField(
        null=True,
        blank=True
    )

    returned = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.user.username} - {self.book.title}"