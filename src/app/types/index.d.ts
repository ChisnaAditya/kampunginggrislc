// How to fix 'Property does not exist on type Window in TypeScript' error
export { };

declare global {
    interface Window {
        gtag: (...args: any[]) => void;
    }
}