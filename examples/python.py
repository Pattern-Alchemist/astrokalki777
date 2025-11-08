from sdk.python import AstroKalki

client = AstroKalki(api_key='demo-key')
print(client.list_readings())
