from django.shortcuts import render,redirect
from .forms import QuestionForm
from .models import Question

# Create your views here.
def home(request):
    return render(request, "main/home.html")

def ask_question(request):
    if request.method == 'POST':
        form = QuestionForm(request.POST)
        if form.is_valid():
            question = form.save(commit=False)
            question.author = request.user
            question.save()
            return redirect('question_detail', pk=question.pk)
    else:
        form = QuestionForm()
    
    return render(request, 'main/query.html', {'form': form})

def question_detail(request, pk):
    question = Question.objects.get(pk=pk)
    return render(request, 'main/question_detail.html', {'question': question})