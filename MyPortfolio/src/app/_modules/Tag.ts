export class Tag{

    static readonly ANGULAR = new Tag('Angular', 'red');
    static readonly PYTHON = new Tag('Python', 'green');
    static readonly JAVASCRIPT = new Tag('JavaScript', 'yellow');
    static readonly TYPESCRIPT = new Tag('TypeScript', 'blue');
    static readonly C = new Tag('C', 'darkred');
    static readonly JAVA = new Tag('Java', 'orange');
    static readonly KOTLIN = new Tag('Kotlin', 'darkgreen');

    private constructor (private readonly key: string, public readonly color: string){

    }

    toString(){
       return this.key;
    }
}