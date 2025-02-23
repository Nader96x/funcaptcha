interface TimestampData {
    cookie: string;
    value: string;
}
declare function tileToLoc(tile: number): number[];
declare function constructFormData(data: {}): string;
declare function random(): string;
declare function getTimestamp(): TimestampData;
declare function getBda(userAgent: string, opts: object): string;
declare function solveBreaker(v2: boolean, breaker: {
    value: string[];
    key: string;
} | string, gameType: number, value: object): any;
declare const _default: {
    DEFAULT_USER_AGENT: string;
    tileToLoc: typeof tileToLoc;
    constructFormData: typeof constructFormData;
    getBda: typeof getBda;
    apiBreakers: {
        v1: {
            3: {
                default: (c: any) => {
                    px: string;
                    py: string;
                    x: any;
                    y: any;
                };
                method_1: (c: any) => {
                    x: any;
                    y: any;
                };
                method_2: (c: any) => {
                    x: any;
                    y: number;
                };
                method_3: (c: any) => {
                    a: any;
                    b: any;
                };
                method_4: (c: any) => any[];
                method_5: (c: any) => number[];
            };
            4: {
                default: (c: any) => any;
            };
        };
        v2: {
            3: {
                value: {
                    alpha: (c: any) => {
                        x: any;
                        y: number;
                        px: string;
                        py: string;
                    };
                    beta: (c: any) => {
                        x: any;
                        y: any;
                        py: string;
                        px: string;
                    };
                    gamma: (c: any) => {
                        x: any;
                        y: number;
                        px: string;
                        py: string;
                    };
                    delta: (c: any) => {
                        x: any;
                        y: any;
                        px: string;
                        py: string;
                    };
                    epsilon: (c: any) => {
                        x: number;
                        y: number;
                        px: string;
                        py: string;
                    };
                    zeta: (c: any) => {
                        x: any;
                        y: any;
                        px: string;
                        py: string;
                    };
                    method_1: (c: any) => {
                        x: any;
                        y: any;
                        px: string;
                        py: string;
                    };
                    method_2: (c: any) => {
                        x: any;
                        y: number;
                        px: string;
                        py: string;
                    };
                    method_3: (c: any) => {
                        x: number;
                        y: number;
                        px: string;
                        py: string;
                    };
                };
                key: {
                    alpha: (c: any) => any[];
                    beta: (c: any) => string;
                    gamma: (c: any) => string;
                    delta: (c: any) => any[];
                    epsilon: (c: any) => {
                        answer: {
                            x: any;
                            y: any;
                            px: string;
                            py: string;
                        };
                    };
                    zeta: (c: any) => any[];
                    method_1: (c: any) => {
                        a: any;
                        b: any;
                        px: string;
                        py: string;
                    };
                    method_2: (c: any) => any[];
                    method_3: (c: any) => any[];
                };
            };
            4: {
                value: {
                    alpha: (c: any) => {
                        index: number;
                    };
                    beta: (c: any) => {
                        index: number;
                    };
                    gamma: (c: any) => {
                        index: number;
                    };
                    delta: (c: any) => {
                        index: number;
                    };
                    epsilon: (c: any) => {
                        index: number;
                    };
                    zeta: (c: any) => {
                        index: any;
                    };
                    va: (c: any) => {
                        index: any;
                    };
                    vb: (c: any) => {
                        index: number;
                    };
                    vc: (c: any) => {
                        index: number;
                    };
                    vd: (c: any) => {
                        index: number;
                    };
                };
                key: {
                    alpha: (c: any) => any[];
                    beta: (c: any) => {
                        size: number;
                        id: any;
                        limit: number;
                        req_timestamp: number;
                    };
                    gamma: (c: any) => any;
                    delta: (c: any) => {
                        index: any;
                    };
                    epsilon: (c: any) => any;
                    zeta: (c: any) => any[];
                    ka: (c: any) => any;
                    kb: (c: any) => any[];
                    kc: (c: any) => {
                        guess: any;
                    };
                };
            };
        };
    };
    getTimestamp: typeof getTimestamp;
    random: typeof random;
    solveBreaker: typeof solveBreaker;
};
export default _default;
