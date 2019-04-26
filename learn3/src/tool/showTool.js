
import moment from 'moment'

class showTool {
    show(){
        alert(moment().format('YYYY-MM-DD HH:MM:SS'))
    }

    hide(){
        console.log('hide')
    }

    bubbleSort(arr) {
        let len = arr.length;
        for (let i = 0; i < len; i++) {
            for (let j = 0; j < len - 1 - i; j++) {
                if (arr[j] > arr[j+1]) {        //相邻元素两两对比
                    let temp = arr[j+1];        //元素交换
                    arr[j+1] = arr[j];
                    arr[j] = temp;
                }
            }
        }
        return arr;
    }

    insertionSort(arr) {
        let len = arr.length;
        let preIndex, current;
        for (let i = 1; i < len; i++) {
            preIndex = i - 1;
            current = arr[i];
            while(preIndex >= 0 && arr[preIndex] > current) {
                arr[preIndex+1] = arr[preIndex];
                preIndex--;
            }
            arr[preIndex+1] = current;
        }
        return arr;
    }

    superSort(inputArray) {
        let sortArray = {};
        let outputArray = [];
        inputArray.forEach(val=>{
            let len = val.toString().length;
            sortArray[len] = sortArray[len] || [];
            sortArray[len].push(val);
        })
        for(let i in sortArray) {
            sortArray[i].sort((a,b)=>{
                return a - b;
            })
            outputArray.push(...sortArray[i])
        }
        return outputArray;
    }

    superConsle(){
        console.log('xxxxxxxxxxx');
        console.log('console-end');
    }
}

export default showTool;