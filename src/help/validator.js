export default function validator(data) {
    let msg = '';
    const validateList = {
        require: (value) => {
            return value !== '' ? '' : `Không để trống bạn êy`;
        },
        email: (value) => {
            return value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
                ? ''
                : 'Vui lòng nhập đúng email bạn êy !';
        },
        passConfirm: (value) => {
            let [pass, pass2] = value.split(':');
            return pass === pass2 && pass != '' && pass2 != '' ? '' : 'Nhập lại đúng password bạn êy';
        },
        min: (num) => {
            return (value) => {
                return value.toString().length > num ? '' : 'Nhập quá ngắn bạn êy';
            };
        },
    };
    let check;
    for (const key in data) {
        let valueArr = data[key];
        if (typeof data[key] !== 'object') {
            valueArr = [data[key]];
        }
        for (const value of valueArr) {
            if (key.includes(':')) {
                let keyArr = key.split(':');
                check = validateList[keyArr[0]](keyArr[1])(value);
            } else {
                check = validateList[key](value);
            }

            if (check) {
                msg += check;
            }
        }
    }

    return msg;
}
