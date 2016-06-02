var RE_UCHARS = /([\uD800-\uDBFF][\uDC00-\uDFFFF]|[\S\s])/g;

var codepoints = function(string: string): number {
    return string.replace(RE_UCHARS, '_').length;
};

var substring = function(string: string, length: number): string {
    return string.match(RE_UCHARS).slice(0, length).join('');
}

var just = function(append: boolean): Function {
    return function(string: any, length?: any, chars?: string): string {
        var str: string
            , len: number
            , chr: string
            , diff: number
            , fill: string = ''
            ;

        if (typeof this === 'string' || this instanceof String) {
            str = <string> this;
            len = <number> string;
            chr = <string> length ? length : ' ';
        } else {
            str = <string> string;
            len = <number> length;
            chr = <string> chars ? chars : ' ';
        }

        diff = len - codepoints(str);
        if (diff <= 0) {
            return str;
        }

        do {
            fill += chr;
        } while (diff > codepoints(fill));
        fill = substring(fill, diff);

        return append ? str + fill : fill + str;
    }
};

interface IJust {
    (string: string, length: number, chars?: string): string;
}

interface IJustString {
    (length: number, chars?: string): string;
}

interface IJustInstall {
    (): void;
    ljust: IJust;
    rjust: IJust;
}

var ljust = just(true);
var rjust = just(false);

var install = <IJustInstall> function(): void {
    String.prototype['ljust'] = <IJustString> ljust;
    String.prototype['rjust'] = <IJustString> rjust;
};

install.ljust = <IJust> ljust;
install.rjust = <IJust> rjust;

export = install;
