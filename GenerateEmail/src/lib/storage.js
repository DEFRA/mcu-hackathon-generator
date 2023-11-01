const { BlobServiceClient } = require('@azure/storage-blob');
const { DefaultAzureCredential } = require('@azure/identity');
const { v4: uuidv4 } = require('uuid');

const connectionString = process.env.AZURE_STORAGE_CONNECTION_STRING;

const uploadJsonToBlobStorage = async (containerName, json, metadata) => {
    const blobServiceClient = BlobServiceClient.fromConnectionString(connectionString, new DefaultAzureCredential());

    const containerClient = blobServiceClient.getContainerClient(containerName);

    await containerClient.createIfNotExists();

    const blobName = `${uuidv4()}.json`;
    const blockBlobClient = containerClient.getBlockBlobClient(blobName);

    const uploadResult = await blockBlobClient.upload(JSON.stringify(json), JSON.stringify(json).length);

    await blockBlobClient.setMetadata(metadata);

    return uploadResult;
}

module.exports = {
    uploadJsonToBlobStorage
};
