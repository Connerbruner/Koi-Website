order = []
menu = [
    "5.20,"
]


def getmenu():
    return open("menu.txt", "r").read().splitlines()


def getprice(str):
    price = ""
    for s in str:
        if s == ',':
            break
        else:
            price += s
    return float(price)


def getname(str):
    i = 0
    while str[i] != ",":
        i += 1
    return str[i:]


def add(str):
    global order
    order.append(str)


def orderCost():
    cost = 0
    for s in order:
        cost += getprice(s)
    return cost


def sortorder():
    order.sort()


def stringmenu():
    menu = ""
    for s in getmenu():
        menu += getname(s)+": $"+getprice(s)+ "\n"
    return menu
