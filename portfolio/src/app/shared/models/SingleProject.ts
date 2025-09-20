export class SingleProject {

    title: string = "";
    desc: string = "";
    imgSrc: string = "";
    isTeamProject: boolean = false;

    constructor(_title: string, _desc: string, _imgSrc: string, _isTeamProject: boolean) {
        this.title = _title;
        this.desc = _desc;
        this.imgSrc = _imgSrc;
        this.isTeamProject = _isTeamProject;
    }
}