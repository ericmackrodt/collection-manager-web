declare module '*.html' {
    var value: { 
        controller: any;
        render: (controller: any, container: any) => Element;
        selector: string;
    };
    export default value;
}