# Import the Azure module
Import-Module Az

# Login to Azure
Connect-AzAccount

# Set variables
$resourceGroupName = "example-resources"
$location = "WestEurope"
$storageAccountName = "examplestorageacct"
$skuName = "Standard_LRS"

# Create resource group if it doesn't exist
if (-not (Get-AzResourceGroup -Name $resourceGroupName -ErrorAction SilentlyContinue)) {
    New-AzResourceGroup -Name $resourceGroupName -Location $location
}

# Create storage account
New-AzStorageAccount -ResourceGroupName $resourceGroupName `
                     -Name $storageAccountName `
                     -Location $location `
                     -SkuName $skuName `
                     -Kind StorageV2