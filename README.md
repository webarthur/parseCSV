# ParseCSV.js
A compact but compliant function to convert a CSV string into a javascript object (JSON similar)

## How To
```
<script>
var csvText = 'Header 1,Header 2,Header 3\r\n'
            + ',"","Test ""Quotes"""\r\n'
            + '"Test , Separator","Test \r\nCRLF",   Test    White   Space   \r\n'
            + ' '; //Some accidental white space on optional last row

console.log( csvText.parseCSV() );
</script>
```

This project was based on https://code.google.com/p/csv-to-array/
