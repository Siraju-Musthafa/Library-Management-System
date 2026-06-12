from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

from .models import Borrow
from .serializers import BorrowSerializer

from books.models import Book


class BorrowViewSet(viewsets.ModelViewSet):
    queryset = Borrow.objects.all()
    serializer_class = BorrowSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        book = serializer.validated_data["book"]

        if not book.available:
            raise Exception("Book already borrowed")

        book.available = False
        book.save()

        serializer.save(user=self.request.user)

    @action(detail=True, methods=["post"])
    def return_book(self, request, pk=None):
        borrow = self.get_object()

        if not borrow.returned:
            borrow.returned = True
            borrow.save()

            book = borrow.book
            book.available = True
            book.save()

        return Response({
            "message": "Book returned"
        })