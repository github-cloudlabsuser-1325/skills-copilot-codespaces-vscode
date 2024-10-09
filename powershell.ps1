# Import the Azure module
Import-Module Az

# Define parameters
param (
    [string]$storageAccountName,
    [string]$resourceGroupName,
    [string]$location = "West Europe",
    [string]$sku = "Standard_LRS"
)

# Login to Azure
Connect-AzAccount

# Check if the resource group exists, if not, create it
if (-not (Get-AzResourceGroup -Name $resourceGroupName -ErrorAction SilentlyContinue)) {
    New-AzResourceGroup -Name $resourceGroupName -Location $location
}

# Create the storage account
$storageAccount = New-AzStorageAccount -ResourceGroupName $resourceGroupName `
    -Name $storageAccountName `
    -Location $location `
    -SkuName $sku `
    -Kind StorageV2

# Output the primary endpoint of the storage account
$storageAccount.PrimaryEndpoints.Blob