const distance = (a, b) => {
  if (typeof a === typeof b) {
    //comparam daca cele 2 valori au acelasi tip de data
    const grid = [];
    //initializam un grid pentru comparare si pentru utilizarea lui in algoritm
    for (let i = 0; i < a.length + 1; i++) {
      const row = [];
      //initilizam un row gol pentru a vedea cate caractere are primul string introdus
      for (let j = 0; j < b.length + 1; j++) {
        row.push(j);
        //adaugam caracterele celui de-al doilea string pe rand ca sa putem folosi si transforma in algoritm
      }
      row[0] = i;
      grid.push(row);
      //grid-ul va contine pe amandoua string-urile
    }

    //algoritmul propiu-zis
    for (let i = 1; i < a.length + 1; i++) {
      for (let j = 1; j < b.length + 1; j++) {
        if (a[i - 1] === b[j - 1]) {
          grid[i][j] = grid[i - 1][j - 1];
          //daca in pozitia initiala avem acelasi caracter atat pe linie cat si pe coloana
          //valoarea din matrice va fi egala cu elementul de pe diagonala din randul si coloana precedenta
        } else {
          grid[i][j] =
            1 + Math.min(grid[i - 1][j - 1], grid[i - 1][j], grid[i][j - 1]);
          //pentru a calcula valoarea de pe pozitia curenta, doar aflam minimul dintre elemente si il incrementam cu 1
        }
      }
    }
    return grid[a.length][b.length];
    //returnam ultima valoare din grid pentru a arata care este valoarea finala de schimbari pe care
    //trebuie sa le facem intre string-uri pentru ca al primul string sa se transforme in al doilea
  } else {
    throw new Error("InvalidType");
    //aruncam eroare daca elementele nu au acelasi typeof
  }
};

module.exports.distance = distance;
