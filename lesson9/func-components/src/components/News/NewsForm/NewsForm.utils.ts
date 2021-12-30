export function getValueFromRef(ref: React.MutableRefObject<(HTMLTextAreaElement | HTMLInputElement | null)[]>, name: string) {
    const element = ref.current.find( el => {
        if (el) {
            return el.name === name
        }
    })

    if (element) {
        return element.value
    } else {
        return 'Error!'
    }
}

// const toBase64 = (file: Blob) => new Promise((resolve, reject) => {
//     const reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onload = () => resolve(reader.result);
//     reader.onerror = error => reject(error);
// });

export function toBase64(file: Blob) {
    return new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        // @ts-ignore
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}

// export function  getValueFromPhotoRef (ref: React.MutableRefObject<(HTMLTextAreaElement | HTMLInputElement | null)[]>) {
//     const element = ref.current.find( el => {
//         if (el) {
//             return el.name === 'photo'
//         }
//     })
//
//     let data = null
//
//     if (element) {
//         if("files" in element && element.files) {
//             data =  toBase64(element.files[0])
//         }
//     }
//
//     return data
// }