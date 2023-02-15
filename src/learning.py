import pandas as pd
# # print("hello world");
# # x = 3 + 3 * 9
# # print(x);
# # y = (8*8)-8
# # print(y)
# # name = "Micheal Jackson"

# # print(name[::2])
# # #a, J
# # f ="you are wrong"
# # print(f.upper())
# # c=1/1
# # print(type(c))
# # print(type(int(12.3)))

# #List
# L = ["Micheal Jackson", 10.1, 1982, [1,2], ("A", 1)]
# print(L[-1])
# print(L[3:5])
# L.extend(["pop", 10])
# print((L))
# L.append(["opo", 10.2])
# print(L)


# A = ["disco", 10, 1.2]
# print('Before change:', A)
# A[0] = 'hard rock'
# print('After change:', A)

# print("Before change:", A)
# del(A[0])
# print("After Change:", A)

# print("hard rock".split())
# print('A,B,C,D'.split(','))
# print("ABCD".split(","))


# A = ["hard rock", 10, 1.2]
# B = A
# print('A:', A)
# print('B:', B)
# #Cloning a list
# B = A[:]
# print('B[0]:', B[0])
# A[0] = "Jaber"
# print('B[0]:', B[0])
# print('B[0]:', A[0])

# A = [1, 'a']
# B = [2, 1, 'd']
# print(A + B)
# #tuples

# tuple1 = ("disco",10,1.2 )
# print(tuple1)
# print(tuple1[0])
# print(tuple1[1])
# print(tuple1[2])

# print(type(tuple1[0]))
# print(type(tuple1[1]))
# print(type(tuple1[2]))
# print(tuple1[-1])

# tuple2 = tuple1 + ("hard rock", 10)
# print(tuple2)
# print(tuple2[2:5])
# #sorting
# Ratings = (0, 9, 6, 5, 10, 8, 9, 6, 2)
# RatingsSorted = sorted(Ratings)
# print(RatingsSorted)
# NestedT =(1, 2, ("pop", "rock") ,(3,4),("disco",(1,2)))
# print("Element 0 of Tuple: ", NestedT[0])
# print("Element 1 of Tuple: ", NestedT[1])
# print("Element 2 of Tuple: ", NestedT[2])
# print("Element 3 of Tuple: ", NestedT[3])
# print("Element 4 of Tuple: ", NestedT[4][1])
# print("Element 2, 0 of Tuple: ",   NestedT[2][0])
# print("Element 2, 1 of Tuple: ",   NestedT[2][1])
# print("Element 3, 0 of Tuple: ",   NestedT[3][0])
# print("Element 3, 1 of Tuple: ",   NestedT[3][1])
# print("Element 4, 0 of Tuple: ",   NestedT[4][0])
# print("Element 4, 1 of Tuple: ",   NestedT[4][1])
# print((NestedT[2][1][0]))
# print(NestedT[2][1][3])

# genres_tuple = ("pop", "rock", "soul", "hard rock", "soft rock",
#                 "R&B", "progressive rock", "disco") 
# print(genres_tuple)

# print(genres_tuple.index("disco"))
# #Dictionaries{}
# soundtrack_dic = {"The Bodyguard":"1992", "Saturday Night Fever":"1977"}
# print(soundtrack_dic.keys())
# print(soundtrack_dic.values())
# album_sales_dict = {"Back In Black": 50, "The Bodyguard": 50, "Thriller":65}
# print((album_sales_dict.keys()))
# print(album_sales_dict["Thriller"])
# #sets{}
# print(type(set([1,2,3])))
# # set operations 
# # .add 
# # .remove 
# # "AC/Dc" in A if it is then it will return True
# # Else it will return false
# # to find interception of two sets we use & to find everything in both sets by using .union or we can use issubset to see if one set is inside of another

# album_set1 = set(["Thriller", 'AC/DC', 'Back in Black'])
# album_set2 = set([ "AC/DC", "Back in Black", "The Dark Side of the Moon"])
# interception = album_set1 & album_set2
# print(interception)
# print(album_set1.intersection(album_set2))
# print(album_set1.union(album_set2))
# print(set(album_set1).issuperset(album_set2))
# print(set(album_set2).issubset(album_set1))
# print(set({"Back in Black", "AC/DC"}).issubset(album_set1) )

# Conditions and Branches
# a = 5
# a == 6
# print(a)
# album_released = 1980
# if album_released <= 1980 or album_released == 1991 or album_released == 1993:
#     print("it was released in", album_released)

# album_year = 1979

# if album_year < 1980 or album_year == 1991 or album_year == 1993:
#     print("This album came out in year", album_year)

# dates = [1982,1980,1973]
# N = len(dates)
# for i in range(N):
#     print(dates[i]) 

# for i in range(0, 8):
#     print(i)

# squares = ['red', 'yellow', 'green', 'purple', 'blue']

# for i in range(0, 5):
#     print("Before square ", i, 'is',  squares[i])
#     squares[i] = 'white'
#     print("After square ", i, 'is',  squares[i])


# dates = [1982, 1980, 1973, 2000]

# i = 0
# year = dates[0]

# while(year != 1973):    
#     print(year)
#     i = i + 1
#     year = dates[i]
    

# print("It took ", i ,"repetitions to get out of loop.")


# for i in range(-4, 5):
#     print(i)


# Genres=[ 'rock', 'R&B', 'Soundtrack', 'R&B', 'soul', 'pop']
# for i in Genres:
#     print(i)

# squares=['red', 'yellow', 'green', 'purple', 'blue']
# for square in squares:
#     print(square)

# PlayListRatings = [10, 9.5, 10, 8, 7.5, 5, 10, 10]
# i = 0
# scores = PlayListRatings[0]
# while i < len(PlayListRatings) and scores >= 6:
#     print(scores)
#     i = i + 1
#     scores = PlayListRatings[i]

# squares = ['orange', 'orange', 'purple', 'blue ', 'orange']
# new_squares = []
# i = 0
# began = squares[0]

# while i < len(squares) and squares[i] == 'orange':
#     new_squares.append(squares[i])
#     i = i + 1
# print(new_squares)
    
    # EXCEPTION HANDLEING

# a = 1

# try:
#     b = int(input("Please enter a number to divide by a "))
#     print(b)
#     a = a/b
#     print("Sucess a=", a)
# except:
#     print("There was an error")

# CLASSES

# we define our classs

class Circle(object):

# then we initilaize each instance of the class
# _init_ is a class constructor letting python know Im creating a new class
# the self paramater refers to the newlt created instance of the c;ass

    # def __init__(self, radius, color):
    #     self.radius = radius;
    #     self.color = color;

# C1 = Circle(20, "green")
# print(C1.radius)
# print(C1.color)
#     import sys

#     class Rectangle(object):
#         # Constructor
#         def __init__(self, color, height, width):
#             self.color = color;
#             self.height = height;
#             self.width = width;

#         # Method
#         def add_width(self, w):
#             self.w = self.width + w
#             # print(self.w)
#             return(self.w)
#             # print(self.w)
#             # dir(Rectangle(color, height, width))
#         # Method
#         def drawRectangle(self):
#             plt.gca().add_patch(plt.Rectange(0, 0), self.height, self.width, self.color)
#             plt.axis('scaled')
#             plt.show()
# # METHODS   
# # methods are functions that interace and change the data attributes of an object
# # if we want to change the size of the circle
   


#     class analysedText(object):
#         def __init__(self, text):
#             fmtText = fmtText.lower()
#             fmtText= text.replace(".", " ").replace("!", " ").replace("?", " ").replace(",", " ")
#             self.text = fmtText

#         def freqAll(self):
#             wordList = self.fmtText.split(" ")
#             freqMap = {}
#             for word in set(wordList):
#                 freqMap[word] = wordList.count(word)
#             return freqMap

#         def freqOf(self, word):
#             freqDict = self.frqAll()

#             if word in freqDict:
#                 return freqDict[word]
#             else:
#                 return 0

# Pandas
    # import pandas as pd

    x = {"Name": ['Rose', "John", "Jane","Mary"], "ID": [1,2,3,4], "Department": ["Architect Group", 'Software Group', 'Design Team', 'Infrastructure'], "Salary": [1000000, 80000, 50000, 60000]}

    df = pd.DataFrame(x)
    df()