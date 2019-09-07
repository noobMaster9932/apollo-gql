export const filterGenerator = (arrField, valField) => {
    let objRet = {}
    arrField.forEach(itemField => {
        if (valField[itemField] !== undefined) {
            const splitter = itemField.split('_')
            if (splitter.length > 1) {
                const field = splitter[0]
                switch (splitter[1]) {
                    case 'contains': {
                        if (objRet[field] === undefined) {
                            objRet[splitter[0]] = new RegExp(
                                valField[itemField]
                            )
                        }
                        break
                    }
                    case 'notcontains': {
                        if (objRet[field] === undefined) {
                            objRet[splitter[0]] = {
                                $not: new RegExp(valField[itemField])
                            }
                        }
                        break
                    }
                }
            } else {
                if (objRet[itemField] === undefined) {
                    objRet[itemField] = valField[itemField]
                }
            }
        }
    })
    return objRet
}
export const sortGenerator = type => {
    const sortType = type.split('_ASC')
    switch (sortType.length) {
        case 1: {
            return { [type.split('_DESC')[0]]: -1 }
        }
        case 2: {
            return { [sortType[0]]: 1 }
        }
    }
}
