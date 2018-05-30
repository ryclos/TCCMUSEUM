import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

const DATABASE_FILE_NAME: string ='data.db';

@Component({
  selector: 'page-sqlite',
  templateUrl: 'sqlite.html'
})
export class SqlitePage {

  private db : SQLiteObject;

  constructor(public navCtrl: NavController, private sqlite: SQLite) {
    this.createDatabaseFile();

  }

  //création d'une base de donnée 
  private createDatabaseFile(): void{
    this.sqlite.create({
      name: 'DATABASE_FILE_NAME',
      location: 'default'
    })
    .then((db: SQLiteObject) => {
      console.log('base de donnée crée');
      this.db = db;
      this.createTables();

    })
    .catch(e => console.log(e));
  }

  //création d'une table  
  private createTables():void {
    this.db.executeSql('CREATE TABLE IF NOT EXISTS `oeuvres` ( `id` INTEGER PRIMARY KEY, `photo` INTEGER, `LastName` TEXT, `FirstName` TEXT, `Qrcode` INTEGER, `checked` INTEGER )', {})
    .then(() => {
      console.log('Executed SQL')
      this.saveDataBase();
    })
    .catch(e => console.log(e));

  }

  //insertion de donnée dans le tableau
  private saveDataBase(): void {
    
    this.db.executeSql('INSERT INTO "oeuvre" (id, photo, LastName, FirstName, Qrcode, checked ) values ( 1, "photo", "Jean-Pierre", "ALVAREZ", "Qrcode", 0);' +
      'insert  into "oeuvre" (photo, FirstName, LastName, Qrcode, checked ) values ( "photo", "Poeragni ", "ARAI", "6510403686", "0");' +
      'insert  into "oeuvre" (photo, FirstName, LastName, Qrcode, checked ) values ( "photo", "Jerôme ", "CHANSIN", "7216899933", "0");' +	
      'insert  into "oeuvre" (photo, FirstName, LastName, Qrcode, checked ) values ( "photo", "Jonas ", "CHEUNG-SEN", "1629568455", "0");' +	
      'insert  into "oeuvre" (photo, FirstName, LastName, Qrcode, checked ) values ( "photo", "Heimana ", "CUNNY", "9266553664", "0");' +	
      'insert  into "oeuvre" (photo, FirstName, LastName, Qrcode, checked ) values ( "photo", "Nicola "	, "EBB", "1168085824", "0");' +	
      'insert  into "oeuvre" (photo, FirstName, LastName, Qrcode, checked ) values ( "photo", "Alexandre ", "LEHARTEL", "2791010818", "0");' +	
      'insert  into "oeuvre" (photo, FirstName, LastName, Qrcode, checked ) values ( "photo", "Tetuaoro ", "LENOIR", "4173047359", "0");' +	
      'insert  into "oeuvre" (photo, FirstName, LastName, Qrcode, checked ) values ( "photo","Manaarii ", "LONGINE", "9782420312", "0");' +	
      'insert  into "oeuvre" (photo, FirstName, LastName, Qrcode, checked ) values ( "photo", "Joane "	,"LY", "6872232276", "0");' +	
      'insert  into "oeuvre" (photo, FirstName, LastName, Qrcode, checked ) values ( "photo", "Vaitare "	,"MONACO", "4653519064", "0");' +	
      'insert  into "oeuvre" (photo, FirstName, LastName, Qrcode, checked ) values ( "photo", "Ariipaea "	,"PAEAHI", "3658034121", "0");' +	
      'insert  into "oeuvre" (photo, FirstName, LastName, Qrcode, checked ) values ( "photo", "Aito "	,"PAMBRUN", "5175547403", "0");' +	
      'insert  into "oeuvre" (photo, FirstName, LastName, Qrcode, checked ) values ( "photo","Hiomai ",	"PAMBRUN", "9520532017", "0");' +	
      'insert  into "oeuvre" (photo, FirstName, LastName, Qrcode, checked ) values ( "photo", "Rahiti ",	"PEREZ", "1228597258", "0");' +	
      'insert  into "oeuvre" (photo, FirstName, LastName, Qrcode, checked ) values ( "photo", "Matihamu "	,"PERRY", "5480211371", "0");' +	
      'insert  into "oeuvre" (photo, FirstName, LastName, Qrcode, checked ) values ( "photo", "Christian "	,"ROUSSEL", "2462643924", "0");' +	
      'insert  into "oeuvre" (photo, FirstName, LastName, Qrcode, checked ) values ( "photo","Tinirau ", "TEHUPE", "5055364030", "0");' +	
      'insert  into "oeuvre" (photo, FirstName, LastName, Qrcode, checked ) values ( "photo","Tinirau "	,"TEMATAHOTOA", "6232447902", "0");' +	
      'insert  into "oeuvre" (photo, FirstName, LastName, Qrcode, checked ) values ( "photo", "Teparii "	,"TOOFA", "4235066246", "0");' , {})
    .then(() => console.log('oeuvre ajouter'))
    .catch(err => console.log('SApline erreur oeuvre', err));
  }

public  GetInfos() {
  this.db.executeSql('', {})
  .then((data)=>{

    if (data==null){
      return;
    }

    if(data.rows){
      if(data.rows.length >0) {
        for(var i=0; i=data.rows.length; i++){

        }
      }
    }
  })
}
