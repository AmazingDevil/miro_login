export class BasicData {
  constructor(private project_type: number,
    private name: string,
    private start: object,
    private end: object,
    private has_quality_control: boolean) {

    this.project_type = project_type || -1;
    this.name = name || '';
    this.start = start || null;
    this.end = end || null;
    this.has_quality_control = has_quality_control;
  }

}
