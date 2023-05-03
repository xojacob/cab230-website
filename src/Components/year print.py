def year_print():
    x = 1900
    s = ""
    while x <= 2023:
        s = s + str(x) + ", "
        x += 1

    print(s)

year_print()