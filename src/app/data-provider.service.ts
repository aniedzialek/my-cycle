import { Injectable } from '@angular/core';

@Injectable()
export class DataProviderService {

  constructor() { }

  // private csvFilePath = '../assets/data/cycles.csv';

  // title = 'csvTOjson works!';
  // text  : any ;
  // JSONData : any;
  // csvJSON(csvText) {
  //     var lines = csvText.split("\n");

  //     var result = [];

  //     var headers = lines[0].split(",");
  //     console.log(headers);
  //     for (var i = 1; i < lines.length-1; i++) {

  //         var obj = {};
  //         var currentline = lines[i].split(",");

  //         for (var j = 0; j < headers.length; j++) {
  //             obj[headers[j]] = currentline[j];
  //         }

  //         result.push(obj);

  //     }

  //     //return result; //JavaScript object
  //     console.log(JSON.stringify(result)); //JSON
  //     this.JSONData = JSON.stringify(result);
  //   }

  // parseMe() {
  //   var file = document.getElementById('fileUpload');
  //   const reader = new FileReader();
  //   reader.readAsText(file);
  //   reader.onload = () => {
  //     let text = reader.result;
  //     this.text = text;
  //     console.log(text);
  //     this.csvJSON(text);
  //   };

  //   }

}
