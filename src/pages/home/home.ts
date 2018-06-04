import { Component } from '@angular/core';
/* import { NavController, NavParams} from 'ionic-angular'; */
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

const DATABASE_FILE_NAME: string = 'data.db';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public db: SQLiteObject;
  public total;
  public event = [];
  public nb_checked;


  constructor(private sqlite: SQLite) {
    this.createDatabaseFile();
    console.log('Test');
  }

  //création d'une base de donnée
  private createDatabaseFile(): void {
    console.log('CreateDB');
    this.sqlite.create({
      name: DATABASE_FILE_NAME,
      location: 'default'
    })
      .then((db: SQLiteObject) => {
        console.log('base de donnée créée');
        this.db = db;
        this.createTables();

      })
      .catch(e => console.log(e));
  }

  //création d'une table
  private createTables(): void {
    /* this.db.executeSql('DROP TABLE `oeuvre` ', {}); */
    this.db.executeSql('CREATE TABLE IF NOT EXISTS `oeuvre` ( `id` INTEGER NOT NULL PRIMARY KEY, `lastname` TEXT, `firstname` TEXT, `qrcode` INTEGER, `checked` TEXT )', {})
      .then((table) => {

        if (table.rows.length == 21) {
          console.log('Tableau déjà créée');
          //Nada
        } else {
          console.log('Tableau créée');
          this.saveDataBase();
        }
        this.GetInfos();
      })
      .catch(e => console.log('La table ne s\'est pas créée', e));

  }

  //insertion de donnée dans le tableau
  private saveDataBase(): void {
    this.db.executeSql("INSERT INTO 'oeuvre' VALUES (1,'ALVAREZ','Jean-Pierre',9213750369,'false')," +
      "(2,'ARAI','Poeragni',6510403686,'false')," +
      "(3,'CHANSIN','Jerôme',7216899933,'false')," +
      "(4,'CHEUNG-SEN ','Jonas',1629568455,'false')," +
      "(5,'CUNY','Heimana',9266553664,'false')," +
      "(6,'EBB','Nicolas',1168085824,'false')," +
      "(7,'LEHARTEL','Alexandre',2791010818,'false')," +
      "(8,'LENOIR','Tetuaoro',4173047359,'false')," +
      "(9,'LONGINE','Manaarii ',9782420312,'false')," +
      "(10,'LY','Joane ',6872232276,'false')," +
      "(11,'MARO','Teremu ',1234567890,'false')," +
      "(12,'MONACO','Vaitare',4653519064,'false')," +
      "(13,'PAEAHI','Ariipaea',3658034121,'false')," +
      "(14,'PAMBRUN','Aito ',5175547403,'false')," +
      "(15,'PAMBRUN','Hiomai',9520532017,'false')," +
      "(16,'PEREZ','Rahiti',1228597258,'false')," +
      "(17,'PERRY','Matihamu ',5480211371,'false')," +
      "(18,'ROUSSEL','Christian ',2462643924,'false')," +
      "(19,'TEHUPE','Tinirau ',5055364030,'false')," +
      "(20,'TEMATAHOTOA','Tinirau ',6232447902,'false')," +
      "(21,'TOOFA','Teparii ',4235066246,'false');'", {})
      .then(() => {
        console.log('oeuvre ajoutée');
      })
      .catch(err => console.log('erreur oeuvre', err));
  }


  public GetInfos() {
    this.db.executeSql('SELECT * FROM `oeuvre`', {})
      .then((data) => {
        this.total = data.rows.length; //nombre total d'oeuvres
        console.log(data.rows.item(0));
        console.log('data recupere avec getOeuvre');
        if (data == null) {

          console.log('data null');
          return;
        }
        if (data.rows.length > 0) {
          console.log('data length :', data.rows.length);
          for (var i = 0; i < data.rows.length; i++) {
            this.event.push(data.rows.item(i));
            console.log('nom :', data.rows.item(i).firstname);
          };

        }

        this.getTotalChecked();
      });

  }

  public getTotalChecked(){
    this.db.executeSql('SELECT count(checked) as checked from oeuvre where checked="true"', {})
     .then((data) =>{

       this.nb_checked=data.rows.item(0).checked;
       console.log("nombre de checked : ", this.nb_checked);
     })
     .catch(e => console.log("erreur getTotalCheck",e));

   }

}

  /* public verif() {

    this.db.executeSql('select checked from `oeuvre`', {})
    if (checked == 0 )
      let viewed = false;
      else viewed = true;
} //select_item
  } */


