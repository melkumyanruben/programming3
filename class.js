class Grass {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.multiplay = 0;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(ch) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    bazmanal() {
        this.multiplay++;
        var norVandak = random(this.chooseCell(0));
        if (this.multiplay >= 8 && norVandak) {
            var norXot = new Grass(norVandak[0], norVandak[1]);
            grassArr.push(norXot);
            matrix[norVandak[1]][norVandak[0]] = 1;
            this.multiplay = 0;
        }
    }
    stanalNorKordinatner() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

}

class Xotaker {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 5;
        this.directions = [];
        this.index = 2;
    }
    yntrelVandak(ch) {
        var found = [];
        this.stanalNorKordinatner();
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    stanalNorKordinatner() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }


    utel() {
        this.stanalNorKordinatner();
        var xot = this.yntrelVandak(1);
        var miHatXot = random(xot);
        if (miHatXot) {
            matrix[this.y][this.x] = 0;
            matrix[miHatXot[1]][miHatXot[0]] = 2;
            this.x = miHatXot[0];
            this.y = miHatXot[1];
            this.energy++;
            this.bazmanal();
            for (var i in grassArr) {
                if (this.x == grassArr[i].x && this.y == grassArr[i].y) {
                    grassArr.splice(i, 1);
                }
            }


        }
        else {
            this.sharjvel();
        }

    }
    mahanal() {
        if (this.energy == 0) {
            for (var i in xotakerner) {
                if (this.x == xotakerner[i].x && this.y == xotakerner[i].y) {
                    xotakerner.splice(i, 1);
                    matrix[this.y][this.x] = 0;
                }
            }
        }
    }

    bazmanal() {
        if (this.energy == 10) {
            xotakerner.push(new Xotaker(this.x, this.y));
        }

    }

    sharjvel() {
        this.stanalNorKordinatner();
        var voidCells = this.yntrelVandak(0);
        var newCell = random(voidCells);
        if (newCell) {
            matrix[this.y][this.x] = 0;
            this.x = newCell[0];
            this.y = newCell[1];
            matrix[this.y][this.x] = 2;
            this.energy--;
            this.mahanal();

        }
    }
}




class Gishatich {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 5;
        this.directions = [];
        this.index = 2;
    }
    yntrelVandak(ch) {
        var found = [];
        this.stanalNorKordinatner();
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    stanalNorKordinatner() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    utel1() {
        this.stanalNorKordinatner();
        var xot = this.yntrelVandak(1);
        var miHatXot = random(xot);
        if (miHatXot) {
            matrix[this.y][this.x] = 0;
            matrix[miHatXot[1]][miHatXot[0]] = 3;
            this.x = miHatXot[0];
            this.y = miHatXot[1];
            this.energy++;
            this.bazmanal();
            for (var i in grassArr) {
                if (this.x == grassArr[i].x && this.y == grassArr[i].y) {
                    grassArr.splice(i, 1);

                }
            }


        }
        else {
            this.sharjvel();
        }

    }

    utel() {
        this.stanalNorKordinatner();
        var xot = this.yntrelVandak(2);
        var miHatXot = random(xot);
        if (miHatXot) {
            matrix[this.y][this.x] = 0;
            matrix[miHatXot[1]][miHatXot[0]] = 3;
            this.x = miHatXot[0];
            this.y = miHatXot[1];
            this.energy++;
            this.bazmanal();
            for (var i in xotakerner) {
                if (this.x == xotakerner[i].x && this.y == xotakerner[i].y) {
                    xotakerner.splice(i, 1);
                    console.log("satk");
                }
            }


        }
        else {
            this.utel1();
        }

    }
    mahanal() {
        if (this.energy == 0) {
            for (var i in gishatichner) {
                if (this.x == gishatichner[i].x && this.y == gishatichner[i].y) {
                    gishatichner.splice(i, 1);
                    matrix[this.y][this.x] = 0;
                }
            }
        }
    }

    bazmanal() {
        if (this.energy == 10) {
            gishatichner.push(new Gishatich(this.x, this.y));
        }

    }

    sharjvel() {
        this.stanalNorKordinatner();
        var voidCells = this.yntrelVandak(0);
        var newCell = random(voidCells);
        if (newCell) {
            matrix[this.y][this.x] = 0;
            this.x = newCell[0];
            this.y = newCell[1];
            matrix[this.y][this.x] = 3;
            this.energy--;
            this.mahanal();

        }
    }

}



class Amenaker {

    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 5;
        this.directions = [];
        this.index = 2;
    }
    yntrelVandak() {
        var found = [];
        this.stanalNorKordinatner();
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                found.push(this.directions[i]);

            }
        }
        return found;
    }
    stanalNorKordinatner() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    utel1() {
        this.stanalNorKordinatner();
        var xot = this.yntrelVandak();
        var miHatXot = random(xot);
        if (miHatXot) {
            if (matrix[miHatXot[1]][miHatXot[0]] == 1) {
                for (var i in grassArr) {
                    if (this.x == grassArr[i].x && this.y == grassArr[i].y) {
                        grassArr.splice(i, 1);

                    }
                }

            }

            else if (matrix[miHatXot[1]][miHatXot[0]] == 2) {
                for (var i in grassArr) {
                    if (this.x == grassArr[i].x && this.y == grassArr[i].y) {
                        grassArr.splice(i, 2);

                    }
                }
            }

               else if (matrix[miHatXot[1]][miHatXot[0]] == 3) {
                for (var i in grassArr) {
                    if (this.x == grassArr[i].x && this.y == grassArr[i].y) {
                        grassArr.splice(i, 3);

                    }
                }
               }
            matrix[this.y][this.x] = 0;
            matrix[miHatXot[1]][miHatXot[0]] = 4;
            this.x = miHatXot[0];
            this.y = miHatXot[1];
            this.energy++;



        }
        else {
           
        }

    }
        
    
    utel() {
        this.stanalNorKordinatner();
        var xot = this.yntrelVandak(2);
        var miHatXot = random(xot);
        if (miHatXot) {
            matrix[this.y][this.x] = 0;
            matrix[miHatXot[1]][miHatXot[0]] = 4;
            this.x = miHatXot[0];
            this.y = miHatXot[1];
            this.energy++;
            this.bazmanal();
            for (var i in xotakerner) {
                if (this.x == xotakerner[i].x && this.y == xotakerner[i].y) {
                    xotakerner.splice(i, 1);

                }
            }


        }
        else {
            this.utel1();
        }

    }


}



