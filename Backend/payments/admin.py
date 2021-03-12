from django.contrib import admin
from payments.models import Payment
from import_export.admin import ImportExportModelAdmin

# Register your models here.
# admin.site.register(Payment)

@admin.register(Payment)
class PaymentAdmin(ImportExportModelAdmin):
    pass