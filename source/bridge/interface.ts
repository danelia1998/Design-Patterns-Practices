export type InkType = "acrylic-based" | "alcohol-based";

export interface InkInterface {
    type: InkType;
    get() : InkType;
}

export interface IPrinter {
    ink: InkInterface;

}